// 注意：每次调用$.get()或$.post()或$.ajax()的时候
//会先调用ajaxPrefilter 这个函数
//在这个函数中，可以拿到我们给Ajax提供的配置对象
$.ajaxPrefilter(function(options) {
    //在发起真正的Ajax请求之前，统一拼接请求的根路径
    options.url = 'http://ajax.frontend.itheima.net' + options.url

    //统一为有权限的接口，设置headers请求头
    if (options.url.indexOf('/my/') !== -1) {
        // options.headers = { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzQzNTksInVzZXJuYW1lIjoid2FuZ3J1biIsInBhc3N3b3JkIjoiIiwibmlja25hbWUiOiIiLCJlbWFpbCI6IiIsInVzZXJfcGljIjoiIiwiaWF0IjoxNjExODQ1NjIzLCJleHAiOjE2MTE4ODE2MjN9.tag1GcZZkRTF6ruR0XqN3OCErAYWn21VehWhFUJL_fc ' }
        options.headers = { Authorization: localStorage.getItem('token') || '' }
    }

})