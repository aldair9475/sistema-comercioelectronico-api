import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "./categoria";
import { Promocion } from "./promocion";




@Entity('productos')
export class Producto{

    @PrimaryGeneratedColumn({name: 'id_producto'})
    idProducto: number;


    @ManyToOne(() => Categoria, (categoria) => categoria.categorias)
    @JoinColumn({name: 'id_categoria'})
    categoria: Categoria;

    @Column({name: 'nombre'})
    nombre: string;

    @Column({name: 'descripcion'})
    descripcion: string;

    @Column({name: 'imagen_url'})
    imagenUrl: string;

    @Column({name: 'precio_unitario'})
    precioUnitario: number;

    @Column({name: 'stock'})
    stock: number;

    @Column({name: 'estado_auditoria'})
    estadoAuditoria: string;

    @CreateDateColumn({name: 'fecha_creacion_auditoria'})
    fechaCreacionAuditoria: Date;

    
    @OneToMany(()=>Promocion, (promocion) => promocion.producto)
    promociones: Promocion[];
}