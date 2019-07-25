<template>
    <div class="prodList">
        <h2>상품리스트</h2>

        <table>
            <thead>
                <tr>
                    <th v-for="(col, index) in columns" :key="index">
                        {{ col }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(prodInfo, index) in products" :key="index">
                    <td class="lt">{{ prodInfo.pId }}</td>
                    <td class="lt">{{ prodInfo.pName }}</td>
                    <td class="rt">{{ prodInfo.pPrice | currency }}</td>
                    <td class="lt">{{ prodInfo.pDes }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
/* eslint-disable no-console */
var cm = require('@/js/common.js');

var columns = ['고유번호', '상품명', '가격', '설명'];
var products =  [
    {'pId':'A0001', 'pName': '감자1', 'pPrice':1000, 'pDes':'싱싱한 감자1'},
    {'pId':'A0002', 'pName': '감자2', 'pPrice':2000, 'pDes':'좀 싱싱한 감자2'},
    {'pId':'A0004', 'pName': '감자4', 'pPrice':4000, 'pDes':'썩 싱싱한 감자4'},
    {'pId':'A0003', 'pName': '감자3', 'pPrice':3000, 'pDes':'진짜 싱싱한 감자3'},
    {'pId':'A0006', 'pName': '감자6', 'pPrice':6000, 'pDes':'썩을뻔한 감자6'},
    {'pId':'A0005', 'pName': '감자5', 'pPrice':5000, 'pDes':'싱싱싱싱한 감자5'},
    {'pId':'A0007', 'pName': '감자7', 'pPrice':7000, 'pDes':'감자를 감자7'}
];

export default {
    name: 'productList',
    data () {
        return {
            'columns' : columns,
            'products' : products,
        }
    },
    methods: {

    },
    filters: {
        currency (value) {
            console.log('currency=>', value);
            if(!cm.isEmpty(value)) return cm.numCurrency(value);
            else return '';
        }
    }

}
</script>

<style scoped>
.prodList > h2 {
    text-align: center; 
}
table {
    margin: 30px auto;
}
thead {
    text-align: center;
}
th, td {
    min-width: 120px;
    padding: 10px 10px;
    border: 1px solid black;
}
</style>
