
import { TranslateService } from 'ng2-translate/ng2-translate';
import { WpApiPosts } from 'wp-api-angular';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Store } from '@ngrx/store';

import { addPost } from '../../actions';
import { AppState } from '../../reducers';
import { ItemPage } from './../abstract/ItemPage';
import { Config, Toast } from './../../providers';
/*
  Generated class for the Post page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-post',
  templateUrl: 'post.html'
})
export class PostPage extends ItemPage {
  constructor(
    public config: Config,
    public navParams: NavParams,
    public toast: Toast,
    public translate: TranslateService,
    public navCtrl: NavController,
    private wpApiPosts: WpApiPosts,
    private store: Store<AppState>
  ) {
    super(config, navParams, toast, translate);
    this.setStream(this.store.select((state) => state.post[this.navParams.get('id')]));
    this.setService(wpApiPosts);
    this.setType('post');
  }

  onLoad(post) {
    this.store.dispatch(addPost(post));
  }
}
