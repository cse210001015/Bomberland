import { EntityType, IGameState } from "@coderone/bomberland-library";

export const mock9x9GameState: Omit<IGameState, "connection"> = {
    game_id: "test",
    agents: { a: { agent_id: "a", unit_ids: ["a"] }, b: { agent_id: "b", unit_ids: ["b"] } },
    unit_state: {
        a: {
            coordinates: [5, 8],
            hp: 3,
            inventory: {
                bombs: 3,
            },
            blast_diameter: 3,
            agent_id: "a",
            unit_id: "a",
            invulnerability: 0,
        },
        b: {
            coordinates: [5, 5],
            hp: 3,
            inventory: {
                bombs: 3,
            },
            blast_diameter: 3,
            agent_id: "b",
            unit_id: "b",
            invulnerability: 0,
        },
    },
    entities: [
        {
            x: 6,
            y: 1,
            type: EntityType.MetalBlock,
            created: 1,
        },
        {
            x: 3,
            y: 4,
            type: EntityType.MetalBlock,
            created: 1,
        },
        {
            x: 4,
            y: 5,
            type: EntityType.MetalBlock,
            created: 1,
        },
        {
            x: 0,
            y: 7,
            type: EntityType.MetalBlock,
            created: 1,
        },
        {
            x: 6,
            y: 3,
            type: EntityType.MetalBlock,
            created: 1,
        },
        {
            x: 1,
            y: 5,
            type: EntityType.MetalBlock,
            created: 1,
        },
        {
            x: 4,
            y: 6,
            type: EntityType.MetalBlock,
            created: 1,
        },
        {
            x: 3,
            y: 6,
            type: EntityType.MetalBlock,
            created: 1,
        },
        {
            x: 2,
            y: 6,
            type: EntityType.MetalBlock,
            created: 1,
        },
        {
            x: 7,
            y: 6,
            type: EntityType.MetalBlock,
            created: 1,
        },
        {
            x: 1,
            y: 2,
            type: EntityType.MetalBlock,
            created: 1,
        },
        {
            x: 1,
            y: 1,
            type: EntityType.MetalBlock,
            created: 1,
        },
        {
            x: 8,
            y: 7,
            type: EntityType.MetalBlock,
            created: 1,
        },
        {
            x: 4,
            y: 1,
            type: EntityType.MetalBlock,
            created: 1,
        },
        {
            x: 8,
            y: 5,
            type: EntityType.MetalBlock,
            created: 1,
        },
        {
            x: 4,
            y: 7,
            type: EntityType.MetalBlock,
            created: 1,
        },
        {
            x: 8,
            y: 6,
            type: EntityType.MetalBlock,
            created: 1,
        },
        {
            x: 7,
            y: 7,
            type: EntityType.MetalBlock,
            created: 1,
        },
        {
            hp: 1,
            x: 1,
            y: 6,
            type: EntityType.WoodBlock,
            created: 1,
        },
        {
            hp: 1,
            x: 7,
            y: 0,
            type: EntityType.WoodBlock,
            created: 1,
        },
        {
            hp: 1,
            x: 3,
            y: 2,
            type: EntityType.WoodBlock,
            created: 1,
        },
        {
            hp: 1,
            x: 0,
            y: 0,
            type: EntityType.WoodBlock,
            created: 1,
        },
        {
            hp: 1,
            x: 2,
            y: 3,
            type: EntityType.WoodBlock,
            created: 1,
        },
        {
            hp: 1,
            x: 1,
            y: 3,
            type: EntityType.WoodBlock,
            created: 1,
        },
        {
            hp: 1,
            x: 2,
            y: 4,
            type: EntityType.WoodBlock,
            created: 1,
        },
        {
            hp: 1,
            x: 0,
            y: 2,
            type: EntityType.WoodBlock,
            created: 1,
        },
        {
            hp: 1,
            x: 8,
            y: 8,
            type: EntityType.WoodBlock,
            created: 1,
        },
        {
            hp: 1,
            x: 7,
            y: 4,
            type: EntityType.WoodBlock,
            created: 1,
        },
        {
            hp: 1,
            x: 6,
            y: 7,
            type: EntityType.WoodBlock,
            created: 1,
        },
        {
            hp: 1,
            x: 5,
            y: 0,
            type: EntityType.WoodBlock,
            created: 1,
        },
        {
            hp: 1,
            x: 3,
            y: 8,
            type: EntityType.WoodBlock,
            created: 1,
        },
        {
            hp: 1,
            x: 2,
            y: 0,
            type: EntityType.WoodBlock,
            created: 1,
        },
        {
            hp: 1,
            x: 6,
            y: 2,
            type: EntityType.WoodBlock,
            created: 1,
        },
        {
            hp: 1,
            x: 0,
            y: 8,
            type: EntityType.WoodBlock,
            created: 1,
        },
        {
            hp: 1,
            x: 6,
            y: 6,
            type: EntityType.WoodBlock,
            created: 1,
        },
        {
            hp: 1,
            x: 1,
            y: 0,
            type: EntityType.WoodBlock,
            created: 1,
        },
        {
            hp: 1,
            x: 7,
            y: 3,
            type: EntityType.WoodBlock,
            created: 1,
        },
        {
            hp: 1,
            x: 3,
            y: 1,
            type: EntityType.WoodBlock,
            created: 1,
        },
        {
            hp: 3,
            x: 1,
            y: 4,
            type: EntityType.OreBlock,
            created: 1,
        },
        {
            hp: 3,
            x: 1,
            y: 7,
            type: EntityType.OreBlock,
            created: 1,
        },
        {
            hp: 3,
            x: 5,
            y: 1,
            type: EntityType.OreBlock,
            created: 1,
        },
        {
            hp: 3,
            x: 5,
            y: 6,
            type: EntityType.OreBlock,
            created: 1,
        },
        {
            hp: 3,
            x: 7,
            y: 8,
            type: EntityType.OreBlock,
            created: 1,
        },
    ],
    world: {
        width: 9,
        height: 9,
    },
    tick: 1,
    config: {
        tick_rate_hz: 10,
        game_duration_ticks: 1800,
        fire_spawn_interval_ticks: 5,
    },
};
