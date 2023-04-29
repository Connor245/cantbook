import { auth } from "./firebase";

const Home = ({ user }) => {
  return (
    <div>
      <b>Logged in!</b>
      <p>Hello, {user.displayName}</p>
      <p>In New York City, a school that's unique,
With a curriculum that's never bleak.
Its founder believed in progressive education,
With a focus on student exploration.
Named after a scientist, it has a colorful name,
And it's known for its commitment to academic fame.
What is this school that's full of vitality,
A place where learning is a constant reality?</p>
      <form>
        <label>
          Answer:
          <input type="text" name="Ans" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <button onClick={() => auth.signOut()}>Sign out</button>
    </div>
  );
};

export default Home;