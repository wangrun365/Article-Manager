function getCommentlist() {
    $.ajax({
        method: 'GET',
        url: 'http://www.liulongbin.top:3006/api/cmtlist',
        data: {},
        success: function(res) {
            if (res.status !== 200) return alert('获取评论列表失败!')
            var rows = [];
            $.each(res.data, function(i, item) {
                var str = `<li class="list-group-item">
                <span class="badge" style="background-color:#f0ad4e;">评论时间：${item.time}</span><span class="badge" style="background-color: #5bc0de;">评论人：${item.username}</span> ${item.content}
            </li>`;
                rows.push(str)
            })
            $('#cmt-list').empty().append(rows.join(''))
        }
    })
}
getCommentlist();
$(function() {
    $('#formAddCmt').submit(function(e) {
        e.preventDefault()
        var data = $(this).serialize()
        $.post('http://www.liulongbin.top:3006/api/addcmt', data, function(res) {
            if (res.status !== 201) { return alert('发表评论失败！') }
            getCommentlist();
            $('#formAddCmt')[0].reset();
        })
    })
})