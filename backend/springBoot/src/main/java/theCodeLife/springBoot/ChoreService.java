package theCodeLife.springBoot;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ChoreService {
    @Autowired
    ChoreRepository choreRepository;

    public List<Chore> getChores() {
        return choreRepository.getAllChores();
    }

    public String deleteChore(String id) {
        return choreRepository.deleteChore(id);
    }

    public String addChore(Chore chore) {
        return choreRepository.addChore(chore);
    }
}
