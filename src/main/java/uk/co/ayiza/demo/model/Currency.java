package uk.co.ayiza.demo.model;

import org.apache.commons.lang3.builder.ToStringBuilder;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * Created by rtai on 16/11/2017.
 */
@Entity
@XmlRootElement
public class Currency {

    @Id @GeneratedValue
    @XmlElement
    private Long id;

    @XmlElement
    private String code;

    @XmlElement
    private String text;

    @XmlElement
    @OneToOne
    private Language language;

    private Currency() {}

    public Currency(Language language, String code, String text) {
        this.language = language;
        this.code = code;
        this.text = text;
    }

    public Long getId() {
        return id;
    }

    public String getCode() {
        return code;
    }

    public String getText() {
        return text;
    }

    public Language getLanguage() {
        return language;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this)
                .append("id", id)
                .append("code", code)
                .append("text", text)
                .append("language", language)
                .toString();
    }
}
