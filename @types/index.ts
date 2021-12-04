
export interface PropertyCardFactory {
    id: string;
    img?: string;
    propertyName?: string;
    serviceType?: string;
    bedroom?: string;
    area?: string;
    amminityList?: Aminity[];
    buttonsList?: ButtonConfig[]
    price?: string;
    action?: any;

}
export interface ChipFactory{
    rightIcon?: any, 
    name:string
    leftIcon?:string
}
export interface Aminity{
    id?: string;
    name: string;
}
export interface ButtonConfig{
    name?: string;
    variant?:  `text` | `contained` | `outlined`;
    color?: string;

}
