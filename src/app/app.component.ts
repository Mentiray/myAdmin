
import { Component } from '@angular/core';

//组件信息
@Component({
  selector: 'app-root', //选择器作为html中的标签
  templateUrl: './app.component.html', //模板
  styleUrls: ['./app.component.css']	//样式，这样就可以实现一套模板多种样式
})
//组件类
export class AppComponent {
  title = 'app'; 	//普通文本绑定
  address = {		//对象属性绑定
  	province : "福建",
  	city : "福州"
  };
}
