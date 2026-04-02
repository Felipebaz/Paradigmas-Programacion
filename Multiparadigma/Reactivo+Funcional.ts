type Observer<T> = (value: T) => void;

class Observable<T> {
    private observers: Observer<T>[] = [];

    subscribe(observer: Observer<T>): void {
        this.observers.push(observer);
    }

    emit(value: T): void {
        this.observers.forEach(observer => observer(value));
    }

    // Operadores funcionales
    map<U>(fn: (value: T) => U): Observable<U> {
        const mapped = new Observable<U>();
        this.subscribe(value => mapped.emit(fn(value)));
        return mapped;
    }

    filter(predicate: (value: T) => boolean): Observable<T> {
        const filtered = new Observable<T>();
        this.subscribe(value => {
            if (predicate(value)) filtered.emit(value);
        });
        return filtered;
    }
}

// Uso pipeline reactivo - funcional 
const clicks = new Observable<{ x: number; y: number }>();
const validclicks = clicks
    .filter(click => click.x > 0 && click.y > 0)
    .map(click => `Click en (${click.x}, ${click.y})`);

validclicks.subscribe(console.log);