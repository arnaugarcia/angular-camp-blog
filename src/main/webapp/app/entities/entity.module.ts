import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AngularCampBlogBlogModule } from './blog/blog.module';
import { AngularCampBlogEntryModule } from './entry/entry.module';
import { AngularCampBlogTagModule } from './tag/tag.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        AngularCampBlogBlogModule,
        AngularCampBlogEntryModule,
        AngularCampBlogTagModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AngularCampBlogEntityModule {}
