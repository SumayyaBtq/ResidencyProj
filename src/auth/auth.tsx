class Auth {
    Authentication: boolean;
    constructor() {
        this.Authentication = false;
    }

    login(cb: () => void) {
        this.Authentication = true;
        cb();
    }

    logout(cb: () => void) {
        this.Authentication = false;
        cb();
    }

    isAuthenticated():boolean {
        return this.Authentication;
    }
}


export default new Auth();