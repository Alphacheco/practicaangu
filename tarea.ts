import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, JoinColumn, } from 'typeorm';

export enum EstadoTarea{
    PENDIENTE = 'pendiente',
    EN_PROGRESO = 'en_progreso',
    COMPLETADA = 'completada',
} 

export enum PrioridadTarea {
    BAJA = 'baja',
    MEDIA = 'media',
    ALTA = 'alta',
}

@Entity('tareas')
export class Tarea {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 160 })
    titulo: string;

    @Column({ type: 'text' , nullable: true })
    descripcion?: string;s

    @Column({ type: 'enum', enum: EstadoTarea, default: EstadoTarea.PENDIENTE })
    estado: EstadoTarea;

    @Column({ type: 'enum', enum: PrioridadTarea, default: PrioridadTarea.MEDIA })
    prioridad: PrioridadTarea;

    @CreateDateColumn()
    fechaCreacion: Date;

    @UpdateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    udatedAt: Date;

}