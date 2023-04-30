package theCodeLife.springBoot;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import java.util.Objects;

public class Chore {
    @Id
    private ObjectId id;
    private String chore;

    public Chore() {
    }

    public Chore(ObjectId id, String chore) {
        this.id = id;
        this.chore = chore;
    }

    public ObjectId getId() {
        return this.id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public String getChore() {
        return this.chore;
    }

    public void setChore(String chore) {
        this.chore = chore;
    }

    public Chore id(ObjectId id) {
        setId(id);
        return this;
    }

    public Chore chore(String chore) {
        setChore(chore);
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof Chore)) {
            return false;
        }
        Chore chore = (Chore) o;
        return Objects.equals(id, chore.id) && Objects.equals(chore, chore.chore);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, chore);
    }

    @Override
    public String toString() {
        return "{" +
                " id='" + getId() + "'" +
                ", chore='" + getChore() + "'" +
                "}";
    }

}
