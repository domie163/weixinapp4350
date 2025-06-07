const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot0m6og/",
            name: "springboot0m6og",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot0m6og/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "个人健康信息管理小程序"
        } 
    }
}
export default base
