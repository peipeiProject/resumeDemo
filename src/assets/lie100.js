var LIE100 = {
  lie_axios:function(url, data, callback, err){
    console.log('11');
    $.ajax({
      url:url,
      type:'post',
      data:data,
      dataType: 'json',
      success:function(result){
        callback(result);
      },
      error:function(error){
        if (typeof err == "function") {
          err(error);
        }
      }
    })
  }
};
export default LIE100;

