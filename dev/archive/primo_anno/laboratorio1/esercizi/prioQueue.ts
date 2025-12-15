interface P {
    priority: number,

}

function enqueue<T extends P>(e: T, queue: T[]): void{
    queue.unshift(e);
    queue.sort(
        (a, b) => a.priority - b.priority
    )
}

function dequeue<T extends P>(queue: T[]): T | undefined{
    return (queue) ? queue.pop(): undefined;
}