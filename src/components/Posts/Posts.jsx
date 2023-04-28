import people from '../../assets/images/home/people.jpg';
import {
  PostBox,
  Container,
  PostInfo,
  PostText,
  PostHeader,
  PostBtn,
  PostImg,
} from './Posts.styled';

const Posts = () => {
  return (
    <PostBox id="blog">
      <Container>
        <PostImg src={people} alt="our team"></PostImg>
        <PostInfo>
          <PostText>April 16 2020</PostText>
          <PostHeader>Blog Post One</PostHeader>
          <PostText>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
            ipsum dignissimos quae laudantium asperiores nam aliquid impedit
            harum illum dolore explicabo ab dolores itaque rerum temporibus
            doloribus iste maiores deleniti?
          </PostText>
          <PostBtn>Read Our Blog</PostBtn>
        </PostInfo>
      </Container>
    </PostBox>
  );
};

export default Posts;
