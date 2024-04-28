//process argv : bisa mengambil input dari terminal
//command : show, add, delete, update

const command = process.argv[2];
const params = process.argv.slice(3); //mengambil index ke-3 dst
const TodoController = require('./controller/TodoController');

switch (command) {
    case 'show':
        TodoController.show();
        break;
    case 'add':
        TodoController.add(params);
        break;
    case 'delete':
        TodoController.delete(params);
        break;
    case 'update':
        TodoController.update(params);
        break;
    default:
        // console.log("masukkan command yang benar!");
        TodoController.message("masukkan command yang benar!")
        break;
}