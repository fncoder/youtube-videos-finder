import React from 'react';
import { connect } from 'react-redux';
import { addPlayerVideo, showNavigate } from 'actions';
import Videos from 'components/Videos';
import VideosNotFound from 'components/VideosNotFound';

class VideosContainer extends React.Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
    this.loadVideosSystem = this.loadVideosSystem.bind(this);
  }

  onClick(e) {
    const { addPlayerVideo } = this.props;

    if (e.target.className === 'video-media__icon' || e.target.className === 'video-title') {
      addPlayerVideo(parseFloat(e.currentTarget.id));
    }
  }

  loadVideosSystem(items, videosList) {
    const { showNavigate } = this.props;
    if (items && items.length === 0) {
      showNavigate(false);
      return <VideosNotFound />;
    }
    showNavigate(true);
    return videosList;
  }

  render() {
    const { items, playerVideoID, addPlayerVideo } = this.props;
    return (
      <Videos
        items={items}
        onClick={this.onClick}
        playerVideoID={playerVideoID}
        loadVideosSystem={this.loadVideosSystem}
      />
    );
  }
}

const mapStateToProps = state => ({
  items: state.fetchVideosSuccess.items,
  playerVideoID: state.addPlayerVideo,
});

const mapDispatchToProps = dispatch => ({
  addPlayerVideo: value => dispatch(addPlayerVideo(value)),
  showNavigate: value => dispatch(showNavigate(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VideosContainer);
