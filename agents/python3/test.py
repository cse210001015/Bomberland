import random

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

actions = ["up","down","left","right"]
print(move_to_pos([2,5],[4,5],[[3,5],[5,3]]))