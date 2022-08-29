from typing import Union
from game_state import GameState
import asyncio
import random
import os
import time

uri = os.environ.get(
    'GAME_CONNECTION_STRING') or "ws://127.0.0.1:3000/?role=agent&agentId=agentId&name=defaultName"

actions = ["up", "down", "left", "right", "bomb", "detonate"]


def move(action,coor,obs,actions2):
    coor1=coor.copy()
    if action=='right':
        coor[0] +=1
    elif action=='left':
        coor[0] -=1
    elif action=="up":
        coor[1] +=1
    elif action=="down":
        coor[1] -=1
    if coor in obs:
        actions2.remove(action)
        if len(actions2)==0:
            return "bomb"
        action=random.choice(actions2)
        return move(action,coor1.copy(),obs,actions2.copy())
    return action

        
def move_to_pos(pos,coor,obs):
    actions1=["up","down","left","right"]
    if coor[0]<pos[0]:
        action="right"
    elif coor[0]>pos[0]:
        action="left"
    elif coor[1]<pos[1]:
        action="up"
    elif coor[1]>pos[1]:
        action="down"
    else:
        action=random.choice(actions1)
    action=move(action,coor,obs,actions1.copy())
    return action

class Agent():
    def __init__(self):
        self._client = GameState(uri)

        # any initialization code can go here
        self._client.set_game_tick_callback(self._on_game_tick)

        loop = asyncio.get_event_loop()
        connection = loop.run_until_complete(self._client.connect())
        tasks = [
            asyncio.ensure_future(self._client._handle_messages(connection)),
        ]
        loop.run_until_complete(asyncio.wait(tasks))

    # returns coordinates of the first bomb placed by a unit
    def _get_bomb_to_detonate(self, unit) -> Union[int, int] or None:
        entities = self._client._state.get("entities")
        bombs = list(filter(lambda entity: entity.get(
            "unit_id") == unit and entity.get("type") == "b", entities))
        bomb = next(iter(bombs or []), None)
        if bomb != None:
            return [bomb.get("x"), bomb.get("y")]
        else:
            return None

    async def _on_game_tick(self, tick_number, game_state):
        
        # get my units
        my_agent_id = game_state.get("connection").get("agent_id")
        my_units = game_state.get("agents").get(my_agent_id).get("unit_ids")

        l_obs_id = [ 'b' , 'x' , 'o' , 'm' , 'w'] 
        l_obs_coor=[]
        obstacles=game_state.get("entities")
        for obstacle in obstacles:
                a=obstacle.get("type")
                if a in l_obs_id :
                    x=obstacle.get("x")
                    y=obstacle.get("y")
                    co_2=[x,y]
                    l_obs_coor.append(co_2)
        print(l_obs_coor)
        
        #if unit id of req , 
        # send each unit a random action
        for unit_id in my_units:
            unit_coor=game_state.get("unit_state").get(unit_id).get("coordinates")
            action=move_to_pos([7,7],unit_coor,l_obs_coor)

            if action in ["up", "left", "right", "down"]:
                await self._client.send_move(action, unit_id)
            elif action == "bomb":
                await self._client.send_bomb(unit_id)
            elif action == "detonate":
                bomb_coordinates = self._get_bomb_to_detonate(unit_id)
                if bomb_coordinates != None:
                    x, y = bomb_coordinates
                    await self._client.send_detonate(x, y, unit_id)
            else:
                print(f"Unhandled action: {action} for unit {unit_id}")
            


def main():
    for i in range(0,10):
        while True:
            try:
                Agent()
            except:
                time.sleep(5)
                continue
            break


if __name__ == "__main__":
    main()
