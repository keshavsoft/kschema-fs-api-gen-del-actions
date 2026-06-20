class AppError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

class ConflictError extends AppError { }
class StorageError extends AppError { }

export { AppError, ConflictError, StorageError };