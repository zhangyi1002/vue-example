import Vue from 'vue';

export default function create(Component, props) {
    // 1.生成component实例
    // 方法1
    const vm = new Vue({
        // 渲染函数使用：h===CreateElement h(Component) => vdom
        render: h => h(Component, {props})
    }).$mount(); // 执行挂载函数，但未指定挂载目标，表示只执行初始化工作，即先渲染不挂载

    // 方法2
    // 在Vue基础构造器基础上生成组件构造器
    /*
    const Comp = Vue.extend(Component);
    const vm = new Comp({propsData: props}).$mount();
    */

    // 2.挂载
    document.body.appendChild(vm.$el);

    // 3.声明销毁方法
    let comp = vm.$children[0]; // 方法1
    // let comp = vm; // 方法2
    comp.remove = function () {
        document.body.removeChild(vm.$el);
        vm.$destroy();
    };

    return comp;
}
