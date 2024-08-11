import { connect } from 'react-redux';

export const PostsPage = props => {
  return (
    <div>
      <h1>Posts</h1>
      PostsPage
    </div>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);
