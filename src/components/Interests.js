/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import FontAwesomeIcon from 'react-fontawesome'
import '../../public/style.css'


class Interests extends Component {
  constructor() {
    super()
    this.state = {
      expanded: false
    }
    this.toggleExpand = this.toggleExpand.bind(this)
  }

  toggleExpand () {
    this.setState({
      expanded: !this.state.expanded
    })
  }

  render(){
    if (!this.state.expanded) return (
      <button onClick={this.toggleExpand}>
        <FontAwesomeIcon name="arrow-down" />
        Click for Interests
      </button>
    )
    return (
      <div>
        <button onClick={this.toggleExpand}>
          <FontAwesomeIcon name="arrow-up" />
          Click to Collapse
        </button>
        <div display="flex">
          <div>
            <h2>Reading</h2>
            <p>I like to read</p>
            <style type="text/css" media="screen" />
            <div id="gr_custom_widget_1587436473">
              <div className="gr_custom_container_1587436473">
                <h2 className="gr_custom_header_1587436473">
                  <a style={{textDecoration: "none"}} rel="nofollow" href="https://www.goodreads.com/review/list/1114165-caitlin-floyd?shelf=favorites&amp;utm_medium=api&amp;utm_source=custom_widget">Some Recent Faves</a>
                </h2>
                <div className="gr_custom_each_container_1587436473">
                  <div className="gr_custom_book_container_1587436473">
                    <a title="Know My Name: A Memoir" rel="nofollow" href="https://www.goodreads.com/review/show/3071804969?utm_medium=api&amp;utm_source=custom_widget">
                      <img alt="Know My Name: A Memoir" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1567612158l/50196744._SX50_SY75_.jpg" />
                    </a>
                  </div>
                  <div className="gr_custom_title_1587436473">
                    <a rel="nofollow" href="https://www.goodreads.com/review/show/3071804969?utm_medium=api&amp;utm_source=custom_widget">Know My Name: A Memoir</a>
                  </div>
                  <div className="gr_custom_author_1587436473">
                    by
                    <a rel="nofollow" href="https://www.goodreads.com/author/show/19527332.Chanel_Miller">Chanel Miller</a>
                  </div>
                </div>
                <div className="gr_custom_each_container_1587436473">
                  <div className="gr_custom_book_container_1587436473">
                    <a title="We Are Never Meeting In Real Life: Essays" rel="nofollow" href="https://www.goodreads.com/review/show/2008415185?utm_medium=api&amp;utm_source=custom_widget">
                      <img alt="We Are Never Meeting In Real Life: Essays" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1530160228l/33381433._SY75_.jpg" />
                    </a>
                  </div>
                  <div className="gr_custom_title_1587436473">
                    <a rel="nofollow" href="https://www.goodreads.com/review/show/2008415185?utm_medium=api&amp;utm_source=custom_widget">We Are Never Meeting In Real Life: Essays</a>
                  </div>
                  <div className="gr_custom_author_1587436473">
                    by
                    <a rel="nofollow" href="https://www.goodreads.com/author/show/6896957.Samantha_Irby">Samantha Irby</a>
                  </div>
                </div>
                <div className="gr_custom_each_container_1587436473">
                  <div className="gr_custom_book_container_1587436473">
                    <a title="Homegoing" rel="nofollow" href="https://www.goodreads.com/review/show/1680602680?utm_medium=api&amp;utm_source=custom_widget">
                      <img alt="Homegoing" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1448108591l/27071490._SY75_.jpg" />
                    </a>
                  </div>
                  <div className="gr_custom_title_1587436473">
                    <a rel="nofollow" href="https://www.goodreads.com/review/show/1680602680?utm_medium=api&amp;utm_source=custom_widget">Homegoing</a>
                  </div>
                  <div className="gr_custom_author_1587436473">
                    by
                    <a rel="nofollow" href="https://www.goodreads.com/author/show/14493315.Yaa_Gyasi">Yaa Gyasi</a>
                  </div>
                </div>
                <div className="gr_custom_each_container_1587436473">
                  <div className="gr_custom_book_container_1587436473">
                    <a title="We Should All Be Feminists" rel="nofollow" href="https://www.goodreads.com/review/show/1306001283?utm_medium=api&amp;utm_source=custom_widget">
                      <img alt="We Should All Be Feminists" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1430821222l/22738563._SX50_.jpg" />
                    </a>
                  </div>
                  <div className="gr_custom_title_1587436473">
                    <a rel="nofollow" href="https://www.goodreads.com/review/show/1306001283?utm_medium=api&amp;utm_source=custom_widget">We Should All Be Feminists</a>
                  </div>
                  <div className="gr_custom_author_1587436473">
                    by
                    <a rel="nofollow" href="https://www.goodreads.com/author/show/11291.Chimamanda_Ngozi_Adichie">Chimamanda Ngozi Adichie</a>
                  </div>
                </div>
                <div className="gr_custom_each_container_1587436473">
                  <div className="gr_custom_book_container_1587436473">
                    <a title="Shift (Shift, #1-3; Silo, #2)" rel="nofollow" href="https://www.goodreads.com/review/show/1300944703?utm_medium=api&amp;utm_source=custom_widget">
                      <img alt="Shift" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1379003176l/17306293._SX50_.jpg" />
                    </a>
                  </div>
                  <div className="gr_custom_title_1587436473">
                    <a rel="nofollow" href="https://www.goodreads.com/review/show/1300944703?utm_medium=api&amp;utm_source=custom_widget">Shift</a>
                  </div>
                  <div className="gr_custom_author_1587436473">
                    by
                    <a rel="nofollow" href="https://www.goodreads.com/author/show/3064305.Hugh_Howey">Hugh Howey</a>
                  </div>
                </div>
                <br style={{clear: "both"}} />
                <center>
                  <a rel="nofollow" href="https://www.goodreads.com/">
                    <img alt="goodreads.com" style={{border: "0"}} src="https://www.goodreads.com/images/widget/widget_logo.gif" />
                  </a>
                </center>
                <noscript>
                  Share
                  <a rel="nofollow" href="https://www.goodreads.com/">
                    book reviews
                  </a>
                  and ratings with Caitlin, and even join a
                  <a rel="nofollow" href="https://www.goodreads.com/group">
                    book club
                  </a>
                  on Goodreads.
                </noscript>
              </div>
            </div>
            <script src="https://www.goodreads.com/review/custom_widget/1114165.Some%20Recent%20Faves?cover_position=left&cover_size=small&num_books=5&order=d&shelf=favorites&show_author=1&show_cover=1&show_rating=0&show_review=1&show_tags=1&show_title=1&sort=date_added&widget_bg_color=FFFFFF&widget_bg_transparent=&widget_border_width=1&widget_id=1587436473&widget_text_color=000000&widget_title_size=medium&widget_width=medium" type="text/javascript" charSet="utf-8" />
          </div>
          <div>
            <h2>Insta</h2>
            <p>I like Insta</p>
            <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/BytaFy1gUqb/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="12">
              <div className="instaStyle2">
                <a href="https://www.instagram.com/p/BytaFy1gUqb/?utm_source=ig_embed&amp;utm_campaign=loading" className="instaStyle3" target="_blank">
                  <div className="instaStyle4">
                    <div className="instaStyle5" />
                    <div className="instaStyle6">
                      <div className="instaStyle7" />
                      <div className="instaStyle8" />
                    </div>
                  </div>
                  <div className="instaStyle9" />
                  <div className="instaStyle10">
                    <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xlink="https://www.w3.org/1999/xlink">
                      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                          <g>
                            <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631" />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="instaStyle11">
                    <div className="instaStyle12"> View this post on Instagram</div>
                  </div>
                  <div className="instaStyle13" />
                  <div className="instaStyle14">
                    <div>
                      <div className="instaStyle15" />
                      <div className="instaStyle16" />
                      <div className="instaStyle17" />
                    </div>
                    <div className="instaStyle18">
                      <div className="instaStyle19" />
                      <div className="instaStyle20" />
                    </div>
                    <div className="instaStyle21">
                      <div className="instaStyle22" />
                      <div className="instaStyle23" />
                      <div className="instaStyle24" />
                    </div>
                  </div>
                  <div className="instaStyle25">
                    <div className="instaStyle26" />
                    <div className="instaStyle27" />
                  </div>
                </a>
                <p className="instaStyle28">
                  <a href="https://www.instagram.com/p/BytaFy1gUqb/?utm_source=ig_embed&amp;utm_campaign=loading" className="instaStyle29" target="_blank">A post shared by ケイトリン • كيتلين (@caitlinfloyd)</a>
                  on
                  <time className="instaStyle30" dateTime="2019-06-14T23:59:45+00:00">Jun 14, 2019 at 4:59pm PDT</time>
                </p>
              </div>
            </blockquote>
            <script async src="//www.instagram.com/embed.js" />
          </div>
          <div>
            <h2>Music</h2>
            <p>I like music</p>
            <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1EtaNgm260cgSr" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </div>
        </div>
      </div>
    )
  }
}

export default Interests
