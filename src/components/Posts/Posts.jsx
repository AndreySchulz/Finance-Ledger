import people from '../../assets/images/home/people.jpg';
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
      <PostImg src={people} alt="our team"></PostImg>
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
