import blog from '../../assets/images/home/blog.jpg';
import blog2x from '../../assets/images/home/blog@2x.jpg';
import blogWeb from '../../assets/images/home/blog.webp';
import blog2xWeb from '../../assets/images/home/blog@2x.webp';

import {
  PostBox,
  PostInfo,
  PostText,
  PostHeader,
  PostBtn,
  PostImg,
} from './Posts.styled';

const Posts = () => {
  return (
    <PostBox id="blog">
      <picture>
        <source srcset={`${blogWeb} 1x, ${blog2xWeb} 2x`} type="image/webp" />
        <source srcset={`${blog}1x, ${blog2x} 2x`} type="image/jpeg" />
        <PostImg src={blog} alt="Blog" />
      </picture>

      <PostInfo>
        <PostText>April 16 2020</PostText>
        <PostHeader>Blog Post One</PostHeader>
        <PostText>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </PostText>
        <PostBtn>Read Our Blog</PostBtn>
      </PostInfo>
    </PostBox>
  );
};

export default Posts;
