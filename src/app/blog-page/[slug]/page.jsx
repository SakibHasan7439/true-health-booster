import BlogSectionDetails from '@/app/Components/blog-details/BlogSectionDetails';
import PageBreadcrumb from '@/app/Components/product-details/page-breadcrumb/PageBreadcrumb';
import React from 'react';

const BlogDetails = () => {
    return (
        <div>
            <PageBreadcrumb title={"Blog"}/>
            <BlogSectionDetails />
        </div>
    );
};

export default BlogDetails;