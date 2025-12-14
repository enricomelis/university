type Category = 'positive' | 'negative' | 'neutral';

interface ClassificationResult<T> {
    positive: T[];
    negative: T[];
    neutral: T[];
}

function classifyElements<T>(a: T[], classifier: (element: T) => Category): ClassificationResult<T> {
    const result: ClassificationResult<T> = {
        positive: [],
        negative: [],
        neutral: []
    };

    for (const element of a) {
        const category: Category = classifier(element);
        result[category].push(element);
    }

    return result;
}