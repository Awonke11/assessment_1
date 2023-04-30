package theCodeLife.springBoot;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

@Repository
public class ChoreRepository {
    @Autowired
    MongoTemplate mongoTemplate;

    public List<Chore> getAllChores() {
        return mongoTemplate.findAll(Chore.class, "chores");
    }

    public String deleteChore(String id) {
        Query query = new Query(Criteria.where("id").is(id));
        mongoTemplate.remove(query, Chore.class, "chores");
        return "Deleted";
    }

    public String addChore(Chore chore) {
        mongoTemplate.insert(chore, "chores");
        return "Added";
    }
}
