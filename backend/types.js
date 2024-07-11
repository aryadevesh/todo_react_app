const zod = require("zod")

const createTodos = zod.object({
    title: zod.string(),
    description: zod.string()
});

const updateTodos = zod.object({
    id: zod.string()
});

module.exports = {
    createTodos: createTodos,
    updateTodos: updateTodos 
}