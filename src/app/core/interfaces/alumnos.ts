// Define the structure of an Alumnos object
export interface Alumnos {
    id: number;
    name: string;
    duration: string;
    nivel: 'basico' | 'intermedio' | 'avanzado';
    cuatrimestre: number;
}