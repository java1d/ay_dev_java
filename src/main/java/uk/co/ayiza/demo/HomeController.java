package uk.co.ayiza.demo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by rtai on 27/10/2017.
 */

@Controller
public class HomeController {

    private static final Logger logger = LoggerFactory.getLogger(HomeController.class);

    private static String VIEW_LOG_MSG = "returning {} view";
    @RequestMapping(value = "/home")
    public String index() {
        logger.info(VIEW_LOG_MSG, "home");
        return "home";
    }
}
