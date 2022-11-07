import "./center.css";
import "./toggle.css";
import React, { useState, useEffect } from "react";
import Slider from "./swiper";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faComment,
  faShare,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
//  firebase
import "./App.css";
import moment from "moment";
import axios from "axios";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  query,
  serverTimestamp,
  updateDoc,
  onSnapshot,
  deleteDoc,
  orderBy,
} from "firebase/firestore";
import { display } from "@mui/system";

// firebase code
const firebaseConfig = {
  apiKey: "AIzaSyCUnoboaWcVh3P2q9TMmc6yW8EtQC0XEuw",
  authDomain: "socialmediaapp-d9873.firebaseapp.com",
  projectId: "socialmediaapp-d9873",
  storageBucket: "socialmediaapp-d9873.appspot.com",
  messagingSenderId: "121456148400",
  appId: "1:121456148400:web:087cebaa92781388666075",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

function Post() {
  const [currentColor, setcurrentColor] = useState(true);
  const [Ppover, setPpover] = useState(true);
  const [Id, setId] = useState("");
  const [Text, setText] = useState("");
  const [file, setfile] = useState("");

  // mui
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  let colorChange = () => {
    setcurrentColor(!currentColor);
  };
  let classValue = localStorage.getItem("class");

  // firebasecode
  const [postData, setpostData] = useState("");
  const [Posts, setPosts] = useState([]);
  const [Editing, setEditing] = useState({
    editingId: null,
    editingText: "",
    editingfile: "",
  });
  useEffect(() => {
    let unsubscribe = null;

    const getRealTimeData = async () => {
      const q = query(collection(db, "posts"), orderBy("time", "desc"));
      unsubscribe = onSnapshot(q, (querySnapshot) => {
        const posts = [];

        querySnapshot.forEach((doc) => {
          // posts.unshift(doc.data()); ye bhi tariqa he descending krne ka
          // posts.push(doc.data()); is ko naye tariqe se push kr rhe hen

          posts.push({ id: doc.id, ...doc.data() });
          // console.log(doc.id);
        });
        setPosts(posts);
      });
    };
    getRealTimeData();
    return () => {
      unsubscribe();
    };
  }, []);

  const SavePost = async (e) => {
    e.preventDefault();

    const cloudinaryData = new FormData();
    cloudinaryData.append("file", file || Editing.editingfile);
    cloudinaryData.append("upload_preset", "postPhotoFacebook");
    cloudinaryData.append("cloud_name", "haroon123");
    axios
      .post(
        `https://api.cloudinary.com/v1_1/haroon123/image/upload`,
        cloudinaryData,
        {
          header: {
            "Content-Type": "multipart/from-data",
          },
        }
      )
      .then((res) => {
        try {
          const docRef = addDoc(collection(db, "posts"), {
            text: postData,
            time: serverTimestamp(),
            img: res?.data?.url,
          });
        } catch (e) {}
      });
  };

  const DeletePost = async (postId) => {
    await deleteDoc(doc(db, "posts", postId));
  };
  const UpdatePost = async (e) => {
    e.preventDefault();
    // console.log(Editing.editingfile);
    await updateDoc(doc(db, "posts", Editing.editingId), {
      text: Editing.editingText,
      // img: Editing.editingfile,
    });
    setEditing({
      editingId: null,
      editingText: "",
      editingfile: "",
    });
  };

  //  console.log(Posts)

  return (
    <div>
      <form onSubmit={SavePost} className="form">
        <div className="inpText">
          <img src="images/img1.png" className="profilePhoto" alt="" />
          <input
            className="input"
            type="text"
            placeholder="What's in your mind..."
            onChange={(e) => {
              setpostData(e.target.value);
            }}
          />
        </div>
        <div className="inputFile">
          <input
            type={"file"}
            id="image"
            onChange={(e) => {
              setfile(e.currentTarget.files[0]);
            }}
          />
          <button type="submit" className="button">
            GetPost
          </button>
        </div>
      </form>
      <div className="body">
        <div className="flex">
          {Posts.map((eachPost, i) => (
            <div
              className={`post ${classValue === "true" ? "yesPost" : "noPost"}`}
              key={i}
            >
              <div className="postHeader">
                <img
                  className="profilePhoto"
                  src="images/img1.png"
                  alt="profile"
                />
                <div>
                  {"Haroon"} <br />
                  {
                    <span>
                      {moment(
                        eachPost?.time?.seconds
                          ? eachPost?.time.seconds * 1000
                          : undefined
                      ).fromNow()}
                    </span>
                  }
                </div>
                <div>
                  <Button
                    aria-describedby={id}
                    variant="contained"
                    className="threedots"
                    onClick={handleClick}
                    onMouseDown={() => {
                      setId(eachPost?.id);
                      setPpover(true);
                      setText(eachPost?.text);
                      setfile(eachPost?.img);
                      // console.log(eachPost.img);
                    }}
                  >
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                  </Button>
                  <Popover
                    id={Ppover ? id : "simple-nopover"}
                    open={open}
                    // className={'simple-popover'}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "top",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "top",
                    }}
                  >
                    <Typography sx={{ p: 2 }}>
                      <button
                        onClick={() => {
                          DeletePost(Id);
                          setPpover(false);
                        }}
                      >
                        Delete{" "}
                      </button>
                      <button
                        onClick={() => {
                          // console.log(eachPost?.id);
                          setEditing({
                            editingId: Id,
                            editingText: Text,
                            editingfile: file,
                          });
                          setPpover(false);

                        }}
                      >
                        Edit
                      </button>
                    </Typography>
                  </Popover>
                </div>
                {/* <div className="threedots"></div> */}
                {/* {isclicked === true ? (
                  sasas
              
                ) : (
                  <div>
                    <select>
                      <option>Delete</option>
                      <option>Edit</option>
                    </select>
                  </div>
                )} */}
              </div>
              <div className="postText">
                <div className="postDescr">
                  {eachPost.id === Editing.editingId ? (
                    <form className="NextForm" onSubmit={UpdatePost}>
                      <input
                        type="text"
                        className="Updateinput"
                        value={Editing.editingText}
                        onChange={(e) => {
                          setEditing({
                            ...Editing,
                            editingText: e.target.value,
                          });
                        }}
                        placeholder="Please Enter Updated Value"
                      />
                      <input
                        type={"file"}
                        className="Updateinput"
                        onChange={(e) => {
                          setEditing({
                            ...Editing,
                            editingfile: e.currentTarget.files[0],
                          });
                        }}
                        placeholder="Please Enter Updated Value"
                      />
                      <button type="submit" className="button next">
                        Update
                      </button>
                    </form>
                  ) : (
                    eachPost?.text
                  )}
                </div>

                <img
                  src={eachPost?.img}
                  alt=""
                  id="images"
                  className="postImage"
                />
                <br />
                {/* <div className="NextForm">
                  <button
                    className="button"
                    onClick={() => {
                      DeletePost(eachPost?.id);
                    }}
                  >
                    Delete
                  </button>
                  {Editing.editingId === eachPost?.id ? null : (
                    <button
                      className="button"
                      onClick={() => {
                        setEditing({
                          editingId: eachPost?.id,
                          editingText: eachPost?.text,
                        });
                      }}
                    >
                      Edit
                    </button>
                  )}
                </div> */}
                <hr />
                <div className="postFooter">
                  <div onClick={colorChange}>
                    <FontAwesomeIcon
                      className={currentColor ? "black" : "yellow"}
                      icon={faThumbsUp}
                    />
                    like
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faComment} /> comment
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faShare} /> share
                  </div>
                </div>
                <hr />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
function Center() {
  // let classValue  =  localStorage.getItem("class");
  return (
    <div className="Center">
      <div className="swiperSlider">
        <Slider />
      </div>
      <Post />
    </div>
  );
}

export default Center;
