/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import FontAwesomeIcon from 'react-fontawesome'
import InstagramEmbed from 'react-instagram-embed'
import '../../static/font-awesome-custom/interests.css'

class Interests extends Component {
  constructor() {
    super()
    this.state = {
      read: false,
      insta: false,
      music: false
    }
    this.toggleRead = this.toggleRead.bind(this)
    this.toggleInsta = this.toggleInsta.bind(this)
    this.toggleMusic = this.toggleMusic.bind(this)
  }

  toggleRead () {
    this.setState({
      read: !this.state.read,
      insta: false,
      music: false
    })
  }

  toggleInsta () {
    this.setState({
      read: false,
      insta: !this.state.insta,
      music: false
    })
  }

  toggleMusic () {
    this.setState({
      read: false,
      insta: false,
      music: !this.state.music
    })
  }

  render(){
    if (this.state.read) return (
      <div>
        <div>
          <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
            <h2 style={{fontSize: "14px", fontWeight: "600", textTransform: "uppercase", display: "table", borderBottom: "5px solid #086375", marginLeft: "1.5em"}}>
              Hobbies:
            </h2>
            <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
              <div>
                <button type="button" onClick={this.toggleInsta} style={{marginLeft: "1.5em"}}>
                  Exploring
                  <FontAwesomeIcon name="arrow-down" style={{paddingLeft: ".5em"}} />
                </button>
              </div>
              <div>
                <button type="button" onClick={this.toggleRead} style={{marginLeft: "1.5em"}} className="active">
                  Reading
                  <FontAwesomeIcon name="arrow-up" style={{paddingLeft: ".5em"}} />
                </button>
              </div>
              <div>
                <button type="button" onClick={this.toggleMusic} style={{marginLeft: "1.5em"}}>
                  Jamming
                  <FontAwesomeIcon name="arrow-down" style={{paddingLeft: ".5em"}} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around"}}>
          <div style={{width: "40%"}}>
            <p>
              I like to read everything from literary fiction to sci-fi, fiction to nonfiction, poetry to prose.
            </p>
            <p>
              Some of my favorite writers include Chimamanda Ngozi Adichie, Kurt Vonnegut, Jane Austen, Douglas Adams, Sarah Kay, Agatha Christie, and David Sedaris.
            </p>
          </div>
          <div>
            <style type="text/css" media="screen" />
            <div id="gr_custom_widget_1587436473">
              <div className="gr_custom_container_1587436473">
                <h3 className="gr_custom_header_1587436473">
                  <a style={{textDecoration: "none"}} rel="nofollow" href="https://www.goodreads.com/review/list/1114165-caitlin-floyd?shelf=favorites&amp;utm_medium=api&amp;utm_source=custom_widget">Some Recent Faves</a>
                </h3>
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
                    {"by "}
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
                    {"by "}
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
                    {"by "}
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
                    {"by "}
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
                    {"by "}
                    <a rel="nofollow" href="https://www.goodreads.com/author/show/3064305.Hugh_Howey">Hugh Howey</a>
                  </div>
                </div>
                <br style={{clear: "both"}} />
                <center>
                  <a rel="nofollow" href="https://www.goodreads.com/user/show/1114165-caitlin-floyd">
                    <img alt="Caitlin's Goodreads profile" style={{border: "0"}} src="https://www.goodreads.com/images/widget/widget_logo.gif" />
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
        </div>
      </div>
    )
    if (this.state.insta) return (
      <div>
        <div>
          <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
            <h2 style={{fontSize: "14px", fontWeight: "600", textTransform: "uppercase", display: "table", borderBottom: "5px solid #086375", marginLeft: "1.5em"}}>
              Hobbies:
            </h2>
            <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
              <div>
                <button type="button" onClick={this.toggleInsta} style={{marginLeft: "1.5em"}} className="active">
                  Exploring
                  <FontAwesomeIcon name="arrow-up" style={{paddingLeft: ".5em"}} />
                </button>
              </div>
              <div>
                <button type="button" onClick={this.toggleRead} style={{marginLeft: "1.5em"}}>
                  Reading
                  <FontAwesomeIcon name="arrow-down" style={{paddingLeft: ".5em"}} />
                </button>
              </div>
              <div>
                <button type="button" onClick={this.toggleMusic} style={{marginLeft: "1.5em"}}>
                  Jamming
                  <FontAwesomeIcon name="arrow-down" style={{paddingLeft: ".5em"}} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p style={{margin: "2em"}}>{"I've been very lucky to live in some amazing places (before DC, I lived in New York; Philadelphia; and Osaka, Japan) and to travel to even more. Whether I am somewhere new or familiar, I love to wander and take pictures of interesting or beautiful things I see."}</p>
          <div style={{display: "flex", justifyContent: "space-around", flexWrap: "wrap", alignItems: "center"}}>
            <InstagramEmbed
              url='https://www.instagram.com/p/BytaFy1gUqb/'
              maxWidth={320}
              hideCaption={true}
              containerTagName='div'
              protocol=''
              injectScript
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
            <InstagramEmbed
              url='https://www.instagram.com/p/Bo4GI9IFkZz/'
              maxWidth={320}
              hideCaption={true}
              containerTagName='div'
              protocol=''
              injectScript
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
            <InstagramEmbed
              url='https://www.instagram.com/p/5_1sR7nyue/'
              maxWidth={320}
              hideCaption={true}
              containerTagName='div'
              protocol=''
              injectScript
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
            <InstagramEmbed
              url='https://www.instagram.com/p/B8zKjnLJ3V2/'
              maxWidth={320}
              hideCaption={true}
              containerTagName='div'
              protocol=''
              injectScript
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
            <InstagramEmbed
              url='https://www.instagram.com/p/BxEZUs-gD5w/'
              maxWidth={320}
              hideCaption={true}
              containerTagName='div'
              protocol=''
              injectScript
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
            <InstagramEmbed
              url='https://www.instagram.com/p/BwVVO3eAVp-/'
              maxWidth={320}
              hideCaption={true}
              containerTagName='div'
              protocol=''
              injectScript
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />

          </div>
        </div>
      </div>
    )
    if (this.state.music) return (
      <div>
        <div>
          <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
            <h2 style={{fontSize: "14px", fontWeight: "600", textTransform: "uppercase", display: "table", borderBottom: "5px solid #086375", marginLeft: "1.5em"}}>
              Hobbies:
            </h2>
            <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
              <div>
                <button type="button" onClick={this.toggleInsta} style={{marginLeft: "1.5em"}}>
                  Exploring
                  <FontAwesomeIcon name="arrow-down" style={{paddingLeft: ".5em"}} />
                </button>
              </div>
              <div>
                <button type="button" onClick={this.toggleRead} style={{marginLeft: "1.5em"}}>
                  Reading
                  <FontAwesomeIcon name="arrow-down" style={{paddingLeft: ".5em"}} />
                </button>
              </div>
              <div>
                <button type="button" onClick={this.toggleMusic} style={{marginLeft: "1.5em"}} className="active">
                  Jamming
                  <FontAwesomeIcon name="arrow-up" style={{paddingLeft: ".5em"}} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around"}}>
          <div>
            <p>{"Here's what I've been listening to recently."}</p>
            <iframe src="https://open.spotify.com/embed/playlist/6Dia1sJOOHqcPqqSI912SL" title="2020 playlist" width="300" height="380" frameBorder="0" allow="encrypted-media" />
          </div>
          <div>
            <p>{"This is what I listen to when I'm coding."}</p>
            <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DWWQRwui0ExPn" title="lo-fi playlist" width="300" height="380" frameBorder="0" allow="encrypted-media" />
          </div>
        </div>
      </div>
    )
    return (
      <div>
        <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
          <h2 style={{fontSize: "14px", fontWeight: "600", textTransform: "uppercase", display: "table", borderBottom: "5px solid #086375", marginLeft: "1.5em", marginBottom: "5em"}}>
            Hobbies:
          </h2>
          <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
            <div>
              <button type="button" onClick={this.toggleInsta} style={{marginLeft: "1.5em"}}>
                Exploring
                <FontAwesomeIcon name="arrow-down" style={{paddingLeft: ".5em"}} />
              </button>
            </div>
            <div>
              <button type="button" onClick={this.toggleRead} style={{marginLeft: "1.5em"}}>
                Reading
                <FontAwesomeIcon name="arrow-down" style={{paddingLeft: ".5em"}} />
              </button>
            </div>
            <div>
              <button type="button" onClick={this.toggleMusic} style={{marginLeft: "1.5em"}}>
                Jamming
                <FontAwesomeIcon name="arrow-down" style={{paddingLeft: ".5em"}} />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Interests
