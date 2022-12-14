import { Modal } from 'antd';
import React from 'react';
import { Product } from '../../utils/interfaces';

interface Props {
    product: Product,
    modalFunctions: {
        handleOk: () => void;
        handleCancel: () => void;
    },
    isModalOpen: boolean
}

const ModalCardProduct: React.FunctionComponent<Props> = ({ product, modalFunctions, isModalOpen }) => (
    <Modal title={product.title} open={isModalOpen} onOk={modalFunctions.handleOk} onCancel={modalFunctions.handleCancel}>
        <div className='container_img_card'>
            <img alt="example" className='img_card' src={product.image} />
            <div>
            <p><strong>Price:</strong> {product.price}€</p>
            </div>
        </div>
       

        <p>{product.description}</p>
        <div className={`${product.category} category`} >
            {product.category}
        </div>
    </Modal>
);

export default ModalCardProduct;