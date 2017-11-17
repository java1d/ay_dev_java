package uk.co.ayiza.demo.currencies;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RestResource;
import uk.co.ayiza.demo.model.Currency;

/**
 * Created by rtai on 16/11/2017.
 */
@RestResource(path = "currencies", rel = "currencies")
public interface CurrencyRepository extends JpaRepository<Currency, Long> {
}
