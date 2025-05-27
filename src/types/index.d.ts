interface Metric {
    id: number;
    label: string;
    value: string | number;
}

interface User {
    id: number;
    name: string;
    email: string;
}

type Theme = 'light' | 'dark';