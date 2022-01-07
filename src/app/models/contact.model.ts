export class Contact {

    constructor(
        public name: string = '',
        public email: string = '',
        public phone: string = '',
        public _id?: string,) {}

    setId?() {
        // Implement your own set Id
        // this._id = 'hkjgbjhb '
        this._id = this.makeId()
        // this._id = this.makeId()
    }

    makeId?(length = 5):string {
        var txt = ''
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        for (var i = 0; i < length; i++) {
            txt += possible.charAt(Math.floor(Math.random() * possible.length))
        }
        return txt
    }
}

