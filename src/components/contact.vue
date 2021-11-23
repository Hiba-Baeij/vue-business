<template>
  <div class="contact">
    <b-container>
      <b-row>
        <b-col lg="6">
          <h4>contactUs</h4>
          <h2>We Love To Help Great Companies To Enlarge Their Revenues.</h2>
          <div class="form">
            <form action="">
              <b-row>
                <b-col lg="6">
                  <div class="icon-input">
                    <span class="mdi mdi-account"> |</span>
                  </div>
                  <input type="text" class="shadow" placeholder="First Name" />
                </b-col>
                <b-col lg="6">
                  <div class="icon-input">
                    <span class="mdi mdi-account"> |</span>
                  </div>
                  <input type="text" class="shadow" placeholder="Last Name" />
                </b-col>
                <b-col lg="6">
                  <div class="icon-input">
                    <span class="mdi mdi-email"> |</span>
                  </div>
                  <input
                    type="text"
                    class="shadow"
                    placeholder="Email Address"
                  />
                </b-col>
                <b-col lg="6">
                  <div class="icon-input">
                    <span class="mdi mdi-phone"> |</span>
                  </div>
                  <input type="text" class="shadow" placeholder="Phone No" />
                </b-col>
                <b-col lg="6">
                  <div class="icon-input">
                    <span class="mdi mdi-format-page-break"> |</span>
                  </div>
                  <input
                    type="text"
                    class="shadow"
                    placeholder="Project Title"
                  />
                </b-col>
                <b-col lg="6">
                  <div class="icon-input">
                    <span class="mdi mdi-message-reply-text-outline"> |</span>
                  </div>
                  <input
                    type="text"
                    class="shadow"
                    placeholder="Choose Service"
                  />
                </b-col>
                <b-col lg="12">
                  <div class="icon-input">
                    <span class="mdi mdi-message-reply-text-outline"> |</span>
                  </div>
                  <textarea
                    type="text"
                    class="message shadow w-100"
                    placeholder="Message"
                  ></textarea>
                </b-col>
              </b-row>
            </form>
            <button>
              <strong class="mdi mdi-chevron-right"></strong>
              Submit
            </button>
          </div>
        </b-col>
        <b-col lg="6">
          <img src="" alt="" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<style lang="scss">
@import "../assets/scss/variables.scss";
.contact {
  padding: 80px 60px 80px 60px;
  h2 {
    margin-top: 30px;
  }
  input,
  textarea {
    width: 100%;
    padding: 15px 45px;
    border-radius: 20px;
    color: #888;
    border: 0;
    background: #fff;
    outline: $mainPerple;
    margin-top: 20px;
    font-size: 15px;
    &:focus {
      color: $mainPerple !important;
    }
  }

  textarea.message {
    height: 120px;
  }
  .icon-input {
    position: relative;
  }
  span {
    position: absolute;
    top: 0;
    margin-top: 33px;
    margin-left: 13px;
    color: $mainPerple;
  }
  button {
    border: none;
    background: none !important;
    font-size: 20px;
    color: $mainPerple;
    margin-top: 20px;
  }
  strong {
    background-color: $mainPerple;
    padding: 10px;
    border-radius: 30px;
    color: white;
  }
}
</style>