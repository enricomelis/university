String.prototype.rotr = function() {
    if(this.length === 0) return this;

    return this.slice(1) + this[0];
}