function open_passwd_dialog(){
    document.getElementById("passwd_dialog").style.display = "grid";
}

function close_passwd_dialog(){
    document.getElementById("passwd_dialog").style.display = "none";
    document.getElementById("title_input").value = "";
    document.getElementById("passwd_input").value = "";
}

function new_passwd(){
    var id = localStorage.getItem('id');
    var title = document.getElementById("title_input").value;
    var passwd = document.getElementById("passwd_input").value;
    var passwd_div_template = document.getElementById("template");
    let passwd_div = passwd_div_template.cloneNode(true);
    const passwd_div_children = passwd_div.children;
    passwd_div_template.after(passwd_div);
    passwd_div.style.display = "unset";
    id++;
    passwd_div_children[0].innerHTML = title;
    passwd_div_children[1].innerHTML = passwd;
    passwd_div_children[2].innerHTML = id;
    localStorage.setItem('title' + id, title);
    localStorage.setItem('passwd' + id, passwd);
    localStorage.setItem('id', id);
    close_passwd_dialog();
}

function cp(cp_id){
    navigator.clipboard.writeText(cp_id.innerHTML);
}

function del(del_id){
    var lstorage_del_id = del_id.children[2].innerHTML;
    del_id.remove();
    localStorage.removeItem("passwd" + lstorage_del_id);
    localStorage.removeItem("title" + lstorage_del_id);
}

function bulk_del(){
    localStorage.clear();
}

function load(){
    var id = localStorage.getItem('id');
    var i = 0;
    do{
        i++;
        var title_temp = localStorage.getItem('title' + i);
        var passwd_temp = localStorage.getItem('passwd' + i);
        if(title_temp != null){
            var passwd_div_template = document.getElementById("template");
            let passwd_div = passwd_div_template.cloneNode(true);
            const passwd_div_children = passwd_div.children;
            passwd_div_template.after(passwd_div);
            passwd_div.style.display = "unset";
            passwd_div_children[0].innerHTML = title_temp;
            passwd_div_children[1].innerHTML = passwd_temp;
            passwd_div_children[2].innerHTML = i;
        }
    }while(i <= id);
}