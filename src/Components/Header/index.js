// import React from 'react'
import { Menu, } from "antd";
import { HomeFilled } from '@ant-design/icons';


function AppHeader() {
    return (
        <div className='appHeader'>
            <Menu
                mode="horizontal"
                items={[
                    {
                        label: <HomeFilled />,
                        key: "home",
                    },
                    {
                        label: "Men",
                        key: "men",
                        children: [
                            {
                                label: "Men's Shirts",
                                key: "mens-shirts",
                            },
                            {
                                label: "Men's Shoes",
                                key: "mens-shoes",
                            },
                            {
                                label: "Men's Watches",
                                key: "mens-watches",
                            }
                        ]
                    },
                    {
                        label: "Women",
                        key: "women",
                        children: [
                            {
                                label: "Women's Dresses",
                                key: "womens-dresses"
                            },
                            {
                                label: "Women's Watch",
                                key: "womens-watch"
                            },
                            {
                                label: "Women's Bag",
                                key: "womens-bag"
                            },
                            {
                                label: "Women's Shoes",
                                key: "womens-shoes"
                            },
                            {
                                label: "Fragrances",
                                key: "fragrances",
                            },
                        ]
                    },
                    {
                        label: "Accessories",
                        key: "accessories",
                    },
                ]}
            />
        </div>
    );
}

export default AppHeader;   