
export interface PropertyCardFactory {
    id: string;
    img?: string;
    propertyName?: string;
    serviceType?: string;
    isPriceDivider?:boolean,
    bedroom?: string;
    addressLine1?:string;
    addressLine2?:string;
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
export interface PropertyFilter {
    serviceType: string;
    checkInDate: Date;
    checkOutDate: Date;
  }
  
  export interface SearchProps {
    from: Date;
    to: Date;
    minDate?: Date;
    maxDate?: Date;
    serviceType: string;
  }