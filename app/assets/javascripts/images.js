  //$(document).ready(function(){
    var unique_id=0;
    var img_tag_id="";
  
    function get_uid()
    {
    return unique_id++;
    };
      function set_img_tag_id(obj)
      {
      img_tag_id = obj.id;
      };
  
    function get_img_tag_id()
    {
      return "#"+img_tag_id;
    };
  
    function readURL1(input) 
    {
     img_id = get_img_tag_id();
     //alert("hello"+img_id);
    if (input.files && input.files[0]) 
    {
      var reader = new FileReader();
      reader.onload = function (e) {
          $(img_id).attr('src', e.target.result);
      }
      reader.readAsDataURL(input.files[0]);
     }};
    //alert("grt");
  //});



