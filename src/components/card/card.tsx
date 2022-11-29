import React, { useState } from 'react';
import { Card } from 'antd';
import { Product } from '../../utils/interfaces';
import { HeartFilled, InfoCircleOutlined } from '@ant-design/icons';
import ModalCardProduct from '../modal/modal';

const { Meta } = Card;

interface Props {
    product: Product
}

const CardProduct: React.FunctionComponent<Props> = ({ product }) => {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const functions = {
        handleOk,
        handleCancel
    }
    
    return (

        <Card
            hoverable
            style={{ width: '', height: '500px' }}

        >
            <div className='container_img_card'>
                <img alt="example" className='img_card' src={product.image} />
            </div>
            <div className='container_button_info'>
            <button className="button_info" type="button" onClick={showModal}>
                <InfoCircleOutlined className='button_info_icon'/> <p className='p_info_card'>Info</p>
            </button>
            </div>
            <h5 className='title_card_product'>{product.title}</h5>
            <p className='price_card'>{product.price} € </p>
            <div className='container_heard_card'>
                <HeartFilled className='heard_card' />
            </div>
           
            <ModalCardProduct product={product} modalFunctions={functions} isModalOpen={isModalOpen}></ModalCardProduct>
        </Card>


    );
}

export default CardProduct;