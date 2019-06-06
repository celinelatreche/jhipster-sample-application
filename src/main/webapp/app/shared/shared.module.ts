import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OnlineShopSharedLibsModule, OnlineShopSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [OnlineShopSharedLibsModule, OnlineShopSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [OnlineShopSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OnlineShopSharedModule {
  static forRoot() {
    return {
      ngModule: OnlineShopSharedModule
    };
  }
}
