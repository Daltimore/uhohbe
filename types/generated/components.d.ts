import type { Schema, Attribute } from '@strapi/strapi';

export interface ItemsItem extends Schema.Component {
  collectionName: 'components_items_items';
  info: {
    displayName: 'item';
  };
  attributes: {
    product: Attribute.Relation<
      'items.item',
      'oneToOne',
      'api::product.product'
    >;
    quantity: Attribute.Integer;
  };
}

export interface OrderItemItems extends Schema.Component {
  collectionName: 'components_order_item_items';
  info: {
    displayName: 'items';
    description: '';
  };
  attributes: {
    product: Attribute.Relation<
      'order-item.items',
      'oneToOne',
      'api::product.product'
    >;
    quantity: Attribute.Integer;
  };
}

export interface OrderItemOrderItem extends Schema.Component {
  collectionName: 'components_order_item_order_items';
  info: {
    displayName: 'OrderItem';
  };
  attributes: {
    product: Attribute.Relation<
      'order-item.order-item',
      'oneToOne',
      'api::product.product'
    >;
    quantity: Attribute.Integer;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'items.item': ItemsItem;
      'order-item.items': OrderItemItems;
      'order-item.order-item': OrderItemOrderItem;
    }
  }
}
