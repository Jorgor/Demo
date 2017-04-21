//定义控制器
var app = angular.module('app',[]);
 app.controller('fruitController', function ($scope) {
    $scope.cart=[
        {
            id:1200,
            name:'apple',
            quantity:20,
            price:7
        },
        {
            id:1201,
            name:'orange',
            quantity:50,
            price:6
        },

        {
            id:1202,
            name:'banana',
            quantity:10,
            price:3
        },

        {
            id:1203,
            name:'pear',
            quantity:10,
            price:5
        },
    ];
     //计算总购买价格,循环cart数组
     $scope.totalPrice=function () {
         var tatol=0;
         angular.forEach($scope.cart,function (item) {

             tatol+=item.quantity*item.price
         })
         return tatol;
     }

     //计算总购买数量
     $scope.totalQ=function () {
         var tatol=0;
         angular.forEach($scope.cart,function (item) {

             tatol+=parseInt(item.quantity);
         })
         return tatol;
     }

     //移除按钮,根据id删除对应的产品,用index
     $scope.remove=function (id) {
         //因为值为0.1.2.3,定义为-1就是找不到.
         var index=-1;
         angular.forEach($scope.cart,function (item,key) {
            // console.log(item);四个对象数组cart数组
             //console.log(key);0,1,2,3
             if (item.id===id){
                 index=key;
             }
         })
         //如果找到了,那就删除当前
         if (index!=-1){
             $scope.cart.splice(index,1)
         }
     }
     $scope.reduce = function(id){
            var index = -1;
            angular.forEach($scope.cart,function(item,key){
                if(item.id===id){
                    index = key;
                }
                })
                if(index!= -1){
                    console.log($scope.cart[index])
                      if($scope.cart[index].quantity==0) return  ;
                    $scope.cart[index].quantity--;

                }
     }

          $scope.add = function(id){
            var index = -1;
            angular.forEach($scope.cart,function(item,key){
                if(item.id===id){
                    index = key;
                }
                })
                if(index!= -1){
                    console.log($scope.cart[index])
                    $scope.cart[index].quantity++;
                }
            }


 })
