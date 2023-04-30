package theCodeLife.springBoot;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ChoreController {

    @Autowired
    ChoreService choreService;

    @GetMapping("/")
    public ResponseEntity<List<Chore>> allChores() {
        return new ResponseEntity<>(choreService.getChores(), HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<String> addChore(@RequestBody Chore chore) {
        return new ResponseEntity<>(choreService.addChore(chore), HttpStatus.CREATED);
    }

    @DeleteMapping("/remove/{id}")
    public ResponseEntity<String> removeChore(@PathVariable(value = "id") String id) {
        return new ResponseEntity<>(choreService.deleteChore(id), HttpStatus.OK);
    }
}
