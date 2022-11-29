import { useState, useEffect } from 'react';
import { getAllProducts } from "../../services/getAllProducts";
import { Product } from '../../utils/interfaces';
import CardProduct from '../../components/card/card';
import { Row, Col, Layout, Select, Pagination, PaginationProps } from 'antd';
import MenuHeader from '../../components/header/header';
import Loading from '../../components/loading/loading';
// import { DownCircleFilled, EuroCircleFilled, PauseCircleFilled, UpCircleFilled } from '@ant-design/icons';
const { Content } = Layout;


const OPTIONS = ["Men's clothing", "Women's clothing", "Jewelery", "Electronics"];

const OPTIONS_ORDER = [
    {
        value: 'A-title',
        label: 'Order by name (A-Z)',
    },
    {
        value: 'D-title',
        label: 'Order by name (Z-A)',
    },
    {
        value: 'A-price',
        label: 'Order by price (Asc.)',
    },
    {
        value: 'D-price',
        label: 'Order by price (Desc.)',
    },
]


function HomePage(): any {

    const [isLoading, setIsLoading] = useState<boolean>(true)

    const [allProducts, setAllProducts] = useState<Array<Product>>([])

    const [filterProducts, setFilterProducts] = useState<Array<Product>>([])

    const [pageProducts, setPageProducts] = useState<Array<Array<Product>>>([])

    const maxPaginator: number = 12;

    const [page, setPage] = useState<number>(1)

    useEffect(() => {
        getAllProducts().then(resp => {
            console.log(resp)
            setAllProducts(resp);
            setFilterProducts(resp)
            setPageProducts(sliceArrayPagination(resp))

        })
        setIsLoading(false)

    }, [])


    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));

    const sliceArrayPagination = (array: Array<Product>): Array<Product[]> => {
        const result: Array<Product[]> = [];
        for (let x = 0; x < array.length / maxPaginator; x++) {
            result.push(array.slice(x + (x * 11), x + 12 + (x * 12)))
        }
        console.log(result)
        return result
    }

    const handleEvent = (event: string[]) => {
        setSelectedItems(event)
        if (pageProducts.length < 1) {
            setPage(1)
        }
        setFilterProducts([]);
        if (event.length === 0) {
            setFilterProducts(allProducts);
            setPageProducts(sliceArrayPagination(allProducts))
            return;
        }
        const filterProducts: Product[] = [];
        event.forEach((type: string) => {
            const productsFiltered = allProducts.filter((product: Product) => product.category === type.toLowerCase())
            filterProducts.push(...productsFiltered)
        })

        setFilterProducts(filterProducts);
        setPageProducts(sliceArrayPagination(filterProducts))
    }

    const orderByPrice = (event: string) => {
        // const mode: string = event.slice(0,1)
        // const orderBy: string = event.slice(2, event.length)
        if (event === 'A-price') {
            setFilterProducts(filterProducts.sort(
                (firstObject: Product, secondObject: Product) =>
                    (firstObject.price > secondObject.price) ? 1 :
                        (firstObject.price === secondObject.price) ? (
                            (firstObject.price > secondObject.price) ? 1 : -1)
                            : -1
            ))
        } else if (event === 'D-price') {
            setFilterProducts(filterProducts.sort(
                (firstObject: Product, secondObject: Product) =>
                    (firstObject.price < secondObject.price) ? 1 :
                        (firstObject.price === secondObject.price) ? (
                            (firstObject.price > secondObject.price) ? 1 : -1)
                            : -1
            ))
        } else if (event === 'D-title') {
            setFilterProducts(filterProducts.sort(
                (firstObject: Product, secondObject: Product) =>
                    (firstObject.title < secondObject.title) ? 1 :
                        (firstObject.title === secondObject.title) ? (
                            (firstObject.title > secondObject.title) ? 1 : -1)
                            : -1
            ))
        } else if (event === 'A-title') {
            setFilterProducts(filterProducts.sort(
                (firstObject: Product, secondObject: Product) =>
                    (firstObject.title > secondObject.title) ? 1 :
                        (firstObject.title === secondObject.title) ? (
                            (firstObject.title > secondObject.title) ? 1 : -1)
                            : -1
            ))
        }
        setPageProducts(sliceArrayPagination(filterProducts))
    }

    const showTotal: PaginationProps['showTotal'] = (total) => `Total ${total} items`;

    const handleChange = (event: any) => {
        setPage(event)
    }

    return (<>
        <MenuHeader></MenuHeader>

        <Row>
            <Col xs={2}></Col>
            <Col xs={20}>
                <Row className='row_filter'>
                <Col xs={24} md={18}>
                <h5>Filter:</h5>
                <Select
                    mode="multiple"
                    placeholder="Filter by category "
                    value={selectedItems}
                    onChange={handleEvent}
                    style={{ width: '100%' }}
                    options={filteredOptions.map((item) => ({
                        value: item,
                        label: item,
                    }))}

                />
            </Col>
                <Col xs={24} md={6}>
                    <div className='container_button'>
                        
                        <Select
                            placeholder="Order by ..."
                            style={{ width: "95%" }}
                            onChange={orderByPrice}
                            options={OPTIONS_ORDER}
                        />
                    </div>
                </Col>
                </Row>
                <Row justify="space-around" className='container_catalog' gutter={[16, 16]}>
                
                {pageProducts.length === 0 ? 
                    <Loading></Loading>
                    :
                pageProducts?.filter((array: any, index: number) =>
                    index === page - 1
                )[0]?.map((product: any) => {

                    return (
                        <Col xs={24} md={12} lg={6} className="col_cards_products">
                            <CardProduct product={product}></CardProduct>
                        </Col>

                    )
                })}
                    
            </Row>
            <Row className='row_pagination'>
                <Pagination size="small" current={page} total={filterProducts.length} showTotal={showTotal} onChange={handleChange} defaultPageSize={12} />
            </Row>
            </Col>
            <Col xs={2}></Col>
        </Row>
        
    </>
    )
}

export default HomePage; 

/**
 *    <Content className="site-layout" >
            <Row className='row_filter'>
                <Col xs={24} lg={18}>
                <h5>Filter:</h5>
                <Select
                    mode="multiple"
                    placeholder="Filter by category "
                    value={selectedItems}
                    onChange={handleEvent}
                    style={{ width: '100%' }}
                    options={filteredOptions.map((item) => ({
                        value: item,
                        label: item,
                    }))}

                />
            </Col>
                <Col xs={24} lg={6}>
                    <div className='container_button'>
                        
                        <Select
                            placeholder="Order by ..."
                            style={{ width: 200 }}
                            onChange={orderByPrice}
                            options={OPTIONS_ORDER}
                        />
                    </div>
                </Col>
            </Row>
            <Row justify="space-around">
                
                {pageProducts.length === 0 ? 
                    <Loading></Loading>
                    :
                pageProducts?.filter((array: any, index: number) =>
                    index === page - 1
                )[0]?.map((product: any) => {

                    return (

                        <Col xs={24} md={12} lg={6} >
                            <CardProduct product={product}></CardProduct>
                        </Col>

                    )
                })}
                    
            </Row>
            <Row className='row_pagination'>
                <Pagination size="small" current={page} total={filterProducts.length} showTotal={showTotal} onChange={handleChange} defaultPageSize={12} />
            </Row>
        </Content>
 */